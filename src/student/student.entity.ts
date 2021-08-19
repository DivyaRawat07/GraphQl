import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Student{

    @ObjectIdColumn()
    _id: string;      // mongodb id starts with _id (optional)
 
    @PrimaryColumn()  //uniqui column
    id:string;

    @Column()
    firstName:string;

    @Column()
    lastName:string;
}