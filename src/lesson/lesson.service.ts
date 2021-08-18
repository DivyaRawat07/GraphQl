import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import{ InjectRepository} from '@nestjs/typeorm'
import{ Repository} from 'typeorm'
import { v4 as uuid } from 'uuid' 
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,

        
    ){}

    async getLesson(id: string):Promise<Lesson>{
        console.log('id',id)
        const a =  await this.lessonRepository.findOne({id});
        console.log('a',a)
        return a

    }
    

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>{
        const{ name, startDate, endDate} = createLessonInput
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        });

        return this.lessonRepository.save(lesson)
    }

    async getLessons():Promise<Lesson[]>{
        return this.lessonRepository.find()

    }
}
