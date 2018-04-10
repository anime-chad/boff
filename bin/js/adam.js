//var raster = new Raster('adam');
//
//raster.position = view.center;
//raster.scale(0.7);
//raster.rotate(45);

// var adam = new Raster("./boff.png");
// 
// adam.
// adam.position = view.center;
// adam.scale(2);

var maxPoint = new Point(view.size.width, view.size.height);
var adams = [];

var keyData = {
    a: sound = new Howl({src: ["./adams/a.mp3"]}),
    b: sound = new Howl({src: ["./adams/b.mp3"]}),
    c: sound = new Howl({src: ["./adams/c.mp3"]}),
    d: sound = new Howl({src: ["./adams/d.mp3"]}),
    e: sound = new Howl({src: ["./adams/e.mp3"]}),
    f: sound = new Howl({src: ["./adams/f.mp3"]}),
    g: sound = new Howl({src: ["./adams/g.mp3"]}),
    h: sound = new Howl({src: ["./adams/h.mp3"]}),
    i: sound = new Howl({src: ["./adams/i.mp3"]}),
    j: sound = new Howl({src: ["./adams/j.mp3"]}),
    k: sound = new Howl({src: ["./adams/k.mp3"]}),
    l: sound = new Howl({src: ["./adams/l.mp3"]}),
    m: sound = new Howl({src: ["./adams/m.mp3"]}),
    n: sound = new Howl({src: ["./adams/n.mp3"]}),
    o: sound = new Howl({src: ["./adams/o.mp3"]}),
    p: sound = new Howl({src: ["./adams/p.mp3"]}),
    q: sound = new Howl({src: ["./adams/q.mp3"]}),
    r: sound = new Howl({src: ["./adams/r.mp3"]}),
    s: sound = new Howl({src: ["./adams/s.mp3"]}),
    t: sound = new Howl({src: ["./adams/t.mp3"]}),
    u: sound = new Howl({src: ["./adams/u.mp3"]}),
    v: sound = new Howl({src: ["./adams/v.mp3"]}),
    w: sound = new Howl({src: ["./adams/w.mp3"]}),
    x: sound = new Howl({src: ["./adams/x.mp3"]}),
    y: sound = new Howl({src: ["./adams/y.mp3"]}),
    z: sound = new Howl({src: ["./adams/z.mp3"]})
}

function onKeyDown(event) {
    if(keyData[event.key]){
        keyData[event.key].play();
        var randomPoint = Point.random() * maxPoint;
        var randomScale = Math.random() * 5;
        var adam = new Raster("./boff.png")
        adam.position = randomPoint;
        adam.scale(randomScale);
        adams.push(adam);
    }
}

function onFrame(event){
    for(var i = 0; i < adams.length; i++){
        adams[i].scale(0.95);
        if(i > 50){
            adams[0].remove();
            adams,splice(i,1);
            //i--;
        }
    }
}

