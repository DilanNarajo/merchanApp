export interface Report {
id: string;
address?: string;
description?: string;
photoDataUrl?: string; // Base64 (Data URL) de la foto
coords?: { lat: number; lng: number } | null;
createdAt: string; // ISO
status?: 'nuevo' | 'enviado' | 'cerrado';
}