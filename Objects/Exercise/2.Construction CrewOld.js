function constructionCrew(worker){
    if(worker.dizziness){
        worker.levelOfHydrated+=worker.experience*worker.weight*0.1
        worker.dizziness=false;
    }
    return worker;
}
constructionCrew({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })