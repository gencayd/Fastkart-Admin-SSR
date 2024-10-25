export interface BaseEntity {
    id: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    createdBy?: string; // optional, as per the nullable string in C#
    updatedAt?: Date;   // optional, nullable in C#
    updatedBy?: string; // optional, nullable in C#
    deletedAt?: Date;   // optional, nullable in C#
    deletedBy?: string; // optional, nullable in C#
  }