import { Param } from '@nestjs/common';
import { Mutation, Query, Args, ResolveField, Parent} from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { StudentService } from 'src/student/student.service';
import{ AssignStudentsToLessonInput} from './assign-students-to-lesson.input'
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of=>LessonType)
export class LessonResolver{
    constructor(
        private studentService: StudentService,
        private lessonService:LessonService
    ){}
    @Query(returns => LessonType)
        lesson(
            @Args('id') id: string,

        ){
           return this.lessonService.getLesson(id)
           
        }

        @Mutation(returns =>LessonType)
        createLesson(
            @Args('createLessonInput') createLessonInput: CreateLessonInput,
        ){
        return this.lessonService.createLesson(createLessonInput)
        }

        @Query(returns => [LessonType])
        lessons(){
            return this.lessonService.getLessons()
        }

        @Mutation(returns=> LessonType)
        assignStudentsToLesson(
            @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
        ){
            const { lessonId,studentIds} = assignStudentsToLessonInput
            return this.lessonService.assignStudentsToLesson(lessonId,studentIds)
        }
        @ResolveField()
        async students(@Parent() lesson: Lesson){
            return this.studentService.getManyStudents(lesson.students);
        }
    }




