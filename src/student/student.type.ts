import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType('Student')
export class StudentType{


    @Field(type => ID)    // type id of type ID remaining are of type string 
    id:string

    @Field()
    firstName:string

    @Field()
    lastName:string

}