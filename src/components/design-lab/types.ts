
export type ColorOption = 'black' | 'navy' | 'gray' | 'white' | 'red' | 'green' | 'blue' | 'purple' | 'yellow' | 'orange';

export type DesignPlacement = 'chest-left' | 'chest-right' | 'back-center';

export type HoodieView = 'front' | 'back';

export type ElementType = 'text' | 'image';

export type Font = {
  family: string;
  weight: string;
  style: string;
  size: number;
  align: 'left' | 'center' | 'right';
};

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type DesignElement = {
  id: string;
  type: ElementType;
  content: string;
  position: Position;
  size: Size;
  placement: DesignPlacement;
  font?: Font;
  color?: string;
};
