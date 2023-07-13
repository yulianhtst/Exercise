function workers(worker){
    if(worker.dizziness){
        worker.levelOfHydrated+=(worker.weight*worker.experience)*0.1
        worker.dizziness=false;
        console.log(worker); 
    }
    return worker;
}
workers(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 1,
    dizziness: true }
    )