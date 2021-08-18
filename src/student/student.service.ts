import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid' 
import { CreateLessonInput } from 'src/lesson/lesson.input';
import { Repository } from 'typeorm';
import { createStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ){}

    createStudent(createStudentInput:createStudentInput):Promise<Student>{
        const{ firstName, lastName} = createStudentInput;

        const student = this.studentRepository.create({
            id:uuid(),
            firstName,
            lastName
        });
        return this.studentRepository.save(student)

    }
}
