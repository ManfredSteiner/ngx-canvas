# ngx-canvas

Tutorial see: [https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html](tutorial:)

In this tutorial it is shown how you can incorporate 2D Canvas graphics into Angular applications,
and how you can avoid potential problems along the way. It will also show how to add motion to
Canvas graphics by animating them.

## Prerequisites

* Node.js
* Angular CLI
* Visual Code

## Branches
In this project branches are used to reflect the step by step progress. Start with branch master and go ahead to step1, step2, ... .  
Use command `git checkout <branch>` to get one of the following branches:

* [master](../../blob/master/README.md)  
  + New ng project after `ng init ngx-canvas`

* [step1-canvas-component](../../blob/step1-canvas-component/README.md)  
  + [Tutorial][tutorial-step1]: Making An Angular Canvas Component

* [step2-canvas-change](../../blob/step2-canvas-change/README.md)  
  + [Tutorial][tutorial-step2]: Drawing On The Canvas from Lifecycle Hooks

* [step3-animation](../../blob/step2-animation/README.md)
  > **Important hint:**   
  > npm module *boids* is needed, so don't forget to call `npm install`!  
  > This module does not support typescript types. These types are defined in file [src/typings.d.ts](./src/typings.d.ts).  
  + [Tutorial][tutorial-step3]: Animating Canvas Graphics
  + [What is Boids?](https://en.wikipedia.org/wiki/Boids)

* [step4-outside-ngzone](../../blob/step4-outside-ngzone/README.md)
  + [Tutorial][tutorial-step4]: Avoiding Excessive Change Detection By Escaping The Angular Zone
 

[tutorial]: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html
[tutorial-step1]: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#making-an-angular-canvas-component
[tutorial-step2]: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#drawing-on-the-canvas-from-lifecycle-hooks
[tutorial-step3]: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#animating-canvas-graphics
[tutorial-step4]: https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html#avoiding-excessive-change-detection-by-escaping-the-angular-zone