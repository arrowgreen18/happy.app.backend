import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orfanate from './orfanage';

@Entity('images')

export default class Images{
	@PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orfanate, orfanate => orfanate.images)
    @JoinColumn({name: 'orfanate_id'})
    orfanate: Orfanate;
}