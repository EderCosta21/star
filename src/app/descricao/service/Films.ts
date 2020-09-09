import { Filme } from './Filme';

export interface Films {
    count: number;
    next?: any;
    previous?: any;
    results: Filme[];
}
