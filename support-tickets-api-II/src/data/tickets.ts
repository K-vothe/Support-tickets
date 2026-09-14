import { ticket } from "../models/ticket";

export const Tickets: ticket[] = [];
export let nextId = 1;

export function generateId(): number {
  return nextId++;
}

