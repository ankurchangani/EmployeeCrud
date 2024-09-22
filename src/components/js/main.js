const getdata = () => {
    let data = JSON.parse(localStorage.getItem('StorageData'));
    if(!data){
        return[]
    }else{
        return data
    }
}

export default getdata

