import {useState} from 'react'


const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add task')
            return
        }
        onAdd({text, day, reminder})

        setDay('')
        setReminder(false)
        setText('')

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Tasks to complete...' value={text} onChange={(e) => setText(e.target.value)}/>

            </div>
            <div className='form-control form-control-check'>
                <input type='date' placeholder='' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>

            <input type='submit' value='Add Task' className='btn btn-block' ></input>
        </form>
        
    )
}

export default AddTask
