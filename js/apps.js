document.addEventListener('DOMContentLoaded',()=>{
  const grid = document.querySelector('.grid');
  const doodler= document.createelement('div');
  let doodlerleftspace= 50 ;
  let doodlerBottomSpace = 150;
  let isGameOver = false;
  let Platformcount = 5;
 function createdoodler() {
    grid.appendchild(doodler);
    doodler.classlist.add('doodler');
    doodler.style.left= doodlerleftspace +'px';
    doodler.style.bottom = doodlerBottomSpace + 'px';
 }

 function createPlatforms() {
   for (let i = 0; i< Platformcount; i++) {
    let PlatformSpace = 600 / Platformcount;
    let newPlatformBottom = 100;
   }
 }

 function start() {
      if (!isGameOver) {
            createdoodler();
            createPlatforms();
          }
        }
        //attach to button
        start()
});
