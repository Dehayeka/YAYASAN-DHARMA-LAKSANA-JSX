export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            kegiatan: {
                Row: {
                    id_kegiatan: number
                    judul_kegiatan: string | null
                    tanggal_kegiatan: string
                    deskripsi_kegiatan: string | null
                    foto_kegiatan: string | null
                    created_at: string | null
                    updated_at: string | null
                }
                Insert: {
                    id_kegiatan?: number
                    judul_kegiatan?: string | null
                    tanggal_kegiatan: string
                    deskripsi_kegiatan?: string | null
                    foto_kegiatan?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id_kegiatan?: number
                    judul_kegiatan?: string | null
                    tanggal_kegiatan?: string
                    deskripsi_kegiatan?: string | null
                    foto_kegiatan?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
            }
            pencapaian: {
                Row: {
                    id_pencapaian: number
                    judul_pencapaian: string | null
                    deskripsi_pencapaian: string | null
                    foto_pencapaian: string | null
                    created_at: string | null
                    updated_at: string | null
                }
                Insert: {
                    id_pencapaian?: number
                    judul_pencapaian?: string | null
                    deskripsi_pencapaian?: string | null
                    foto_pencapaian?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id_pencapaian?: number
                    judul_pencapaian?: string | null
                    deskripsi_pencapaian?: string | null
                    foto_pencapaian?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
            }
            pendidik: {
                Row: {
                    id_pendidik: number
                    nama_pendidik: string | null
                    jabatan_pendidik: string | null
                    deskripsi_pendidik: string | null
                    foto_pendidik: string | null
                    created_at: string | null
                    updated_at: string | null
                }
                Insert: {
                    id_pendidik?: number
                    nama_pendidik?: string | null
                    jabatan_pendidik?: string | null
                    deskripsi_pendidik?: string | null
                    foto_pendidik?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id_pendidik?: number
                    nama_pendidik?: string | null
                    jabatan_pendidik?: string | null
                    deskripsi_pendidik?: string | null
                    foto_pendidik?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
            }
            pengurus: {
                Row: {
                    id_pengurus: number
                    nama_pengurus: string | null
                    jabatan_pengurus: string | null
                    deskripsi_pengurus: string | null
                    foto_pengurus: string | null
                    created_at: string | null
                    updated_at: string | null
                }
                Insert: {
                    id_pengurus?: number
                    nama_pengurus?: string | null
                    jabatan_pengurus?: string | null
                    deskripsi_pengurus?: string | null
                    foto_pengurus?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id_pengurus?: number
                    nama_pengurus?: string | null
                    jabatan_pengurus?: string | null
                    deskripsi_pengurus?: string | null
                    foto_pengurus?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}
