import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Todo(){
    const router = useRouter();
    const todoId = router.query.todoId
    return(
        <>
        <Link href={`/todos/${todoId}`}></Link>
        </>
    )
}