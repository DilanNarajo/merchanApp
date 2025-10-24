import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { v4 as uuidv4 } from 'uuid';
import { Report } from './reports.model';  // Asegúrate de que esta interfaz esté definida correctamente
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

const STORAGE_KEY = 'reports_v1';

@Injectable({
  providedIn: 'root'  // Asegúrate de que esté configurado como 'root'
})
export class ReportsService {
  private _storage?: Storage;

  constructor(private storage: Storage) {}

  async init() {
    this._storage = await this.storage.create();
  }

  private async readAll(): Promise<Report[]> {
    await this.initIfNeeded();
    return (await this._storage!.get(STORAGE_KEY)) || [];
  }

  private async writeAll(reports: Report[]) {
    await this.initIfNeeded();
    await this._storage!.set(STORAGE_KEY, reports);
  }

  private async initIfNeeded() {
    if (!this._storage) await this.init();
  }

  async list(): Promise<Report[]> {
    return await this.readAll();
  }

  async find(id: string): Promise<Report | undefined> {
    const all = await this.readAll();
    return all.find(r => r.id === id);
  }

  async create(partial: Partial<Report>): Promise<Report> {
    const all = await this.readAll();
    const report: Report = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      status: 'nuevo',
      ...partial,
    };
    all.unshift(report);
    await this.writeAll(all);
    return report;
  }

  async update(id: string, patch: Partial<Report>) {
    const all = await this.readAll();
    const idx = all.findIndex(r => r.id === id);
    if (idx >= 0) {
      all[idx] = { ...all[idx], ...patch };
      await this.writeAll(all);
    }
  }

  async capturePhoto(): Promise<string | undefined> {
    const res = await Camera.getPhoto({
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
      quality: 80,
      allowEditing: false,
    });
    return res?.dataUrl;
  }

  async requestLocationPermission(): Promise<boolean> {
    const perm = await Geolocation.requestPermissions();
    return perm.location === 'granted';
  }

  async getCurrentCoords() {
    const pos = await Geolocation.getCurrentPosition();
    return { lat: pos.coords.latitude, lng: pos.coords.longitude };
  }
}
