import { Order } from '../enums/order.enum';

export interface TableSort {
  sortBy: string;
  sortByOrder: Order;
}
