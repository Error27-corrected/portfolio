declare module 'cloudinary-react' {
  import { Component } from 'react';

  export interface CloudinaryComponentProps {
    cloudName?: string;
    publicId?: string;
    [key: string]: any;
  }

  export class Image extends Component<CloudinaryComponentProps> {}
  export class Cloudinary extends Component<CloudinaryComponentProps> {}
} 