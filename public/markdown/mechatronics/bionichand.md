## Bionic Hand
--------------------------------------------------
### Why
I just needed an excuse to learn more advance electronics and control theory because I have something much bigger planned. Doing projects is a good way to learn about that said topic.

### Goal 
-   Create a bionic hand that is as mechanically and electronically simple as possible while still passing the Southampton Hand Assessment Protocol[1].
    
-   Design a new linear actuator that is very analogous to muscle fibers. Something that is responsive, miniaturizable, and adequately strong, and with a stroke-force relationship that is constant or reminiscent of muscle fibers, and most importantly **it must be compliant**.

### Notes
-   Though the Southampton Hand Assessment Protocol is adequate, I believe it is unreliable and is missing a certain grip that is really important for everyday use. I dub it the “Stick Grip” which is where you are holding a sword, or broom, or perhaps pulling a rope.

- Do you have any clue how good human hands are? Hands contains so many muscle groups allowing humans to hold and manipulate many types of objects. We just take these for granted.
    
-   The current available linear actuators are not ideal. Solenoids have a weird stroke-force relationship. Linear motors are very bulky and have inadequate strength for their size. Linear actuators that use motors to extend/retract a plunger are slow. I believe there are available technologies though I am unable to find something that is commercially available. Notable technologies include the patent in constant force solenoid that i can barely understand [2] and voice coil actuators which is as they say, constant force but i haven’t verified it yet.
- Addendum to above, voice coil actuators are in fact constant force and there are some general mechatronics applications for it but I haven't seen much use in robotics. More in the *Constant Force Linear Actuators* project.


### Logs

--------------------------------------------------

May 20 - onwards
Project halted, Minecraft modding is just too tempting so I'll put this project on hold for a while.

--------------------------------------------------

May 19

-   V1 partial assembly
    
-   Dealing with a lot of friction in the joints and parts where the printed parts and the string have contact.
    

![](/images/v1_partial.jpg)

--------------------------------------------------

May 18

-   Designed and printed parts for v1

--------------------------------------------------

May 1

-   Orders arrived and I have created a small scale test for a control cable using a 0.32mm fishing line and 0.5 ID, 1.5 OD ptfe tube. Working well so far with minimal elastic deformation and friction between the string and tube but the full implementation would be the one to tell if it's actually any good.
    
-   ![](/images/control_cable_test.jpg)
    
-   Cogley’s design used a 2mm OD, .2mm wire spring as the sheath for the cable. Seems too expensive, bulky, and inaccessible but I believe that would actually be better for responsiveness because it doesn’t deform. [5]

--------------------------------------------------

April 29

-   Finished conceptualizing an electric analogue for human muscles. It is that goddamn voice coil actuator but i get to fabricate the components and have already had talks with some suppliers for specially shaped neodymium magnets.

--------------------------------------------------

April 27

-   As it turns out, the thing that broke was the stlink and then it shorted the stm32 in the process. Unsure why it spontaneously broke though, likely due to the fact that it’s chineseum.

--------------------------------------------------

April 26

-   Hello and welcome to this new episode of scrap science, in this episode we fucking lose our marbles because of defective hardware. I've been scratching my head for 3 hours because nothing was working, not knowing that 2 servos and 2 jumper wires were borked that whole time.
- My bluepill also died out of nowhere, I got spares though.
    
-   ![](/images/ded_stm)

--------------------------------------------------

April 25

-   Ok so constant force solenoids are commercially available labeled as voice coil actuators although really expensive. I can make some myself but that would require a lathe for machining a housing and radial magnets which are also expensive. [3][4]
    
-   Fixed issue from yesterday but introduced another problem, friction between the string and the parts.

--------------------------------------------------

April 24

-   Created a sample finger for testing
    
-   ![](/images/sf_cad.png)![](/images/sf_print1.jpg)![](/images/sf_print2.jpg)
    
-   Test 1 Problems: pulling the string does not exert force (check terminology) when the finger’s angle is <100 or >170

--------------------------------------------------
Pre-documentation

-   Tested with multiple bionic hand projects, most are shit but some are exceptional like Will Cogley’s bionic hands although unnecessarily complex and costly.
    
-   Studied basics of general biomechanics and hand biomechanics
    
-   Experimented with related electronic components to get a grasp on what is needed to build the project.


[1] [https://www.shap.ecs.soton.ac.uk/files/protocol.pdf](https://www.shap.ecs.soton.ac.uk/files/protocol.pdf)

[2] [https://patents.google.com/patent/US3987385A/en](https://patents.google.com/patent/US3987385A/en)

[3] [https://www.machinedesign.com/mechanical-motion-systems/article/21836669/what-is-a-voice-coil-actuator](https://www.machinedesign.com/mechanical-motion-systems/article/21836669/what-is-a-voice-coil-actuator)

[4] [https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=14116](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=14116)

[5] [https://www.aliexpress.com/item/1005005267394908.html?spm=a2g0o.order_list.order_list_main.11.65cd1802Fs5cEG](https://www.aliexpress.com/item/1005005267394908.html?spm=a2g0o.order_list.order_list_main.11.65cd1802Fs5cEG)
