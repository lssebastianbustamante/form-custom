import type { ProvinciaData } from "../typings/interfaces";

export const INITIAL_FORM_STATE = {
  isSubmitting: false,
  hasSubmitted: false,
  isOpen: false,
  status: 'IDLE'
}

export const DEFAULT_PROPS = {
  backgroundContainer: '#e18719',
  titleBlock: '¿Quieres hacer parte de tienda mondelez?',
  subTitleBlock: 'Registra tus datos aquí y pronto te contactaremos',
  textButton: 'Registrarme',
  canonicalUrl: '',
  tiposDeNegocio: 'Kiosco, Almacén, Supermercado, otros'
} as const

export const INITIAL_COORDINATES = {
  latitud: 0,
  longitud: 0
}

export const FIELD_TYPES = {
  TEXT: 'text' as const,
  EMAIL: 'email' as const,
  TEL: 'tel' as const,
  NUMERIC: 'numeric' as const,
  SELECT: 'select' as const,
  CHECKBOX: 'checkbox' as const,
} as const;

const BASE_STATE = {
  nombre: '',
  email: '',
  provincia: '',
  tyc: 'false'
}

export const initialStateFields = {
  ARG: {
    ...BASE_STATE,
    calle: '',
    altura: '',
    codigoPostal: '',
    localidad: ''
  },
  COL: {
    ...BASE_STATE,
    ciudad: ''
  },
  PER: {
    ...BASE_STATE,
    distrito: ''
  }
}

export const DEFAULT_SELLER = 'Sin distribuidor en la dirección ingresada'

export const createDistrictsIndex = (districts: ProvinciaData) => {
  return districts.provincias.reduce((acc, provincia) => {
    acc[provincia?.id as string] = provincia
    return acc
  }, {} as Record<string, typeof districts.provincias[0]>)
}

export const loadDistricts = async (country: string) => {
  // Cargar datos según demanda
  const module = await import(`../utils/${country}-districts.json`)
  return module.default ?? module
}

export type CountryCode = 'ARG' | 'COL' | 'PER';

export interface InitialStateFieldsInterface {
  ARG: {
    cuit: string;
    tipoNegocio: string;
    telefono: string;
    calle: string;
    altura: string;
    codigoPostal: string;
    localidad: string;
    nombre: string;
    email: string;
    provincia: string;
    tyc: string;
  };
  COL: {
    ciudad: string;
    nombre: string;
    email: string;
    provincia: string;
    celular: string;
    tyc: string;
  };
  PER: {
    distrito: string;
    nombre: string;
    email: string;
    provincia: string;
    celular: string;
    tyc: string;
  };
}