import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

const InterviewItemCard = ({interview}) => {
const router=useRouter();
const onStart=()=>{
router.push('/dashboard/interview/'+interview?.mockId)
}
const onFeedbackPress=()=>{
  router.push('/dashboard/interview/'+interview.mockId+'/feedback')  
}
    return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-blue-600'>{interview?.jobPosition}</h2>
    <h2 className='text-sm text-gray-900'>{interview?.jobExperience} Years of Experience</h2>
   <h2 className='text-xs text-gray-600'>Created At: {interview.createdAt}</h2>
    <div className="flex justify-between gap-5" >
    <Button onClick={onFeedbackPress} size="sm" variant="outline" className="w-full"
    >Feedback</Button> 
    <Button onClick={onStart} size="sm" className="bg-blue-800 w-full">Start</Button>   
    </div>
    </div>
  )
}

export default InterviewItemCard