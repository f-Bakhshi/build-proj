//fetch all the classes in the database.
// Takes 2-7sces to complate 
const feychClasses = async () =>{
    //....fetch from somewhere....
    return ["math" , "English" , "computer"];
};

const checkClassSize = async (classId:string) => {
    // checks status ...
    return Math.random() > 0.2
    ?{size : 35 ,id : classId} 
    : {size: 50 , id:classId}

}

const enrollClass =async (classId:string) => {
    return Math.random() > 0.1 ? true : false ;    
}


/* 
    Unversity class .... i want to see how many classes that have less than (Or equal to ) 35 people and try to enroll in that class

    return a list of classes that have less than 35 people , and that i was able to enroll in .
*/
async function tryToEnrrol() {
    const classes = await feychClasses()
    let classEnroll = [];

    const result = await classes.map(async (classID) => {
        const size = await checkClassSize(classID)
        if(size.size <= 35){
            const isEnrolled = await enrollClass(classID)
            if(isEnrolled){
                classEnroll.push(classID)
            }
        }
    })

    Promise.all(result)


    return classEnroll;
}
