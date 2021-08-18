import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { createStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(
        private studentService: StudentService,
    ){}

    @Mutation(returns => StudentType)
    async createStudentInput(
        @Args() createStudentInput: createStudentInput
    ){
        return this.studentService.createStudent(createStudentInput)
    }

}