import { ISpec } from '@/types/spec';

// Универсальная функция для проверки наличия свойства в спецификации
export function specHasProperty<T extends string>(
  spec: ISpec, 
  property: T
): spec is ISpec & Record<T, any> {
  return property in spec && (spec as any)[property] != null;
}

// Функция для получения отображаемого значения свойства спецификации
export const getSpecValue = (specProperty: any) => {
  if (!specProperty) return '-';
  if (typeof specProperty === 'object' && 'value' in specProperty) {
    return specProperty.description || specProperty.value;
  }
  if (typeof specProperty === 'string' || typeof specProperty === 'number') {
    return specProperty;
  }
  return '-';
};