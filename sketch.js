var car1,car2,car3,testwall,wall1,wall2,wall3,speed,weight,def1,def2,def3


function setup(){
  createCanvas(2000,800);
  
car1 = createSprite(200,125,20,20);
car2 = createSprite(200,350,20,20);
car3 = createSprite(200,600,20,20);
wall1 = createSprite(12000,225,500000,20)
wall2 = createSprite(12000,450,500000,20)
testwall = createSprite(1400,400,20,1000)

speed1 = Math.round(random(55,90)) 
speed2 = Math.round(random(55,90)) 
speed3 = Math.round(random(55,90)) 

weight1 = Math.round(random(400,1500))
weight2 = Math.round(random(400,1500))
weight3 = Math.round(random(400,1500))











}

function draw(){
  background(0,0,0)

  
  drawSprites();
  car1.velocityX = speed1
  car2.velocityX = speed2
  car3.velocityX = speed3
  if(car1.isTouching(testwall)){
    car1.velocityX = 0
    car1.x = 1381
    def1 = (0.5*weight1*speed1*speed1)/22500
    if(def1>180){
      car1.shapeColor = "red"

    }
    if(def1>80&&def1<180){
      car1.shapeColor = "yellow"

    }
    if(def1<80){
      car1.shapeColor = "green"

    }
    
}
if(car2.isTouching(testwall)){
  car2.velocityX = 0
  car2.x = 1381
  def2 = (0.5*weight2*speed2*speed2)/22500
    if(def2>180){
      car2.shapeColor = "red"

    }
    if(def2>80&&def2<180){
      car2.shapeColor = "yellow"

    }
    if(def2<80){
      car2.shapeColor = "green"

    }
}
if(car3.isTouching(testwall)){
  car3.velocityX = 0
  car3.x = 1381
  def3 = (0.5*weight3*speed3*speed3)/22500
    if(def3>180){
      car3.shapeColor = "red"

    }
    if(def3>80&&def3<180){
      car3.shapeColor = "yellow"

    }
    if(def3<80){
      car3.shapeColor = "green"

    }

}


  



}