import React from 'react'

const Alert = ({ type, msg }) => {
    return (
        <div className='flex absolute top-10 right-0 left-0 justify-center items-center'>
            <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} 
            p-2 lg:rounded-full text-indigo-100 leading-none flex lg:inline-flex items-center`} role="alert">
                <p className={`${type === 'danger' ? 'bg-red-500': 'bg-ble-500'} flex rounded-full font-semibold mr-3 px-2 py-1`}>
                    {type === 'danger' ? 'Failed' : 'Success'}
                </p>
                <p className='mr-2 text-left'>
                    {msg}
                </p>
            </div>
        </div>
    )
}

export default Alert