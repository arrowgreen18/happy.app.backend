import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Images from './images';

@Entity('orfanates')

export default class Orfanate{
	@PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    open_hour: number;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Images, image => image.orfanate, {
        cascade: ['insert', 'update']
    })
    
    @JoinColumn({name: 'orfanate_id'})
    images: Images[];
}