import { PaginateModel } from "./core.interface";

export interface AttributeModel extends PaginateModel {
    data: Attribute[];
}

export interface AttributeValueModel extends PaginateModel {
    data: AttributeValue[];
}

export interface Attribute {
    id: number;
    name: string;
    slug: string;
    status: boolean;
    style: string;
    attribute_values: AttributeValue[];
    created_by_id: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}

export interface AttributeValue {
    id: number;
    name: string;
    value: string;
    slug: string;
    status: boolean;
    hex_color: string;
    attribute_id: number;
    created_by_id?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}