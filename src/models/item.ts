export interface Item {
  id: string;
  content: string;
  createdAt: string;
  viewsLeft?: number;
  encrypted?: boolean;
  expiresAt?: string;
}


export let items: Item[] = [];
