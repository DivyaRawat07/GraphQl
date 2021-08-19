import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()                 //In mongoDb 
export class Lesson{

    @ObjectIdColumn()
    _id: string;      // mongodb id starts with _id (optional)
 
    @PrimaryColumn()  //uniqui column
    id:string;

    @Column()
    name:string;

    @Column()
    startDate:string;

    @Column()
    endDate:string; 

    @Column()
    students:string[];


}