import { Field, ID, ObjectType } from "@nestjs/graphql"
import { StudentType } from "src/student/student.type"

@ObjectType('Lesson')      //GraphQL playground fields
export class LessonType{


    @Field(type => ID)    // type id of type ID remaining are of type string 
    id:string

    @Field()
    name:string

    @Field()
    startDate:string

    @Field()
    endDate:string

    @Field(type=> [StudentType])
    students:string[]; 

}