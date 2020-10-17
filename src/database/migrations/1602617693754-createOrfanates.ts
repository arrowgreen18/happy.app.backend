import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrfanates1602617693754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.createTable(new Table( {
    		name: 'orfanates',
    		columns: [

    		{
    			name: 'id',
    			type: 'integer',
    			unsigned: true,
    			isPrimary: true,
    			isGenerated: true,
    			generationStrategy: 'increment'
    		},

    		{
    			name: "name",
    			type: 'varchar'
    		},

    		{
    			name: 'latitude',
    			type: 'decimal',
    			scale: 0,
    			precision: 2
    		},

    		{
    			name: 'longitude',
    			type: 'decimal',
    			scale: 0,
    			precision: 2
    		},

    		{
                name: 'about',
                type: 'text'
    		},

    		{
                name: 'instructions',
                type: 'text'
    		},

    		{
                name: "open_hour",
    			type: 'varchar'
    		},

    		{
                name: 'open_on_weekends',
                type: 'boolean',
                default: false,
    		},

    	 ],
    	}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.dropTable('orfanates');
    }

}
