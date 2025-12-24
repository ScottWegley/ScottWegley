+++
date = '2025-12-23T17:03:22-08:00'
draft = true
title = 'Vex TeleOp & Auto'
lastmod = 2025-12-23
+++

To quickly address the elephant, I have not kicked the habit of long gaps between posts, nor do I know if I will be able to. It turns out having a full-time job takes time, which means you have less time to do other things. I would love to say that I have been working on projects and just not writing about them, but it is unfortunately not the case. As I sit down to write this, I'm realizing I will need to change my mentality around this if I actually want to do it (which I do).

My mentality when I set this site up was this weird mixture of blog and diary, which I do not think I actually want this site to be. For it to be a blog, I would have to be interested in outputting high-quality content for people to consume. I want it to be of decent quality, and I certainly don't mind consumption, but I dislike the notion of it being "content," especially with the most modern interpretations of the word. I would prefer to keep this as more documentation of things I did, potentially just for me to come back to when I no longer recognize the author. I think it will inspire me to be more active in actually using this site.

Now onto the main topic of this post, my Vex projects. For those unfamiliar, [Vex](https://www.vexrobotics.com/) is a series of educational robots meant to encourage in-classroom development of STEM skills. They hold their own robotics competitions (similar to the F.I.R.S.T. competitions) in which I competed. When I was in college and participating in the Computer Science Club, our faculty advisor let us know that he had some older Vex robots he used to demonstrate at elementary schools if we wanted to mess around with them. That was all the invitation we needed to start figuring out if we could do anything fun with them.

These robots were intended to be programmed using [ROBOTC](https://www.robotc.net/), and it's been long enough that I can't remember the version of the software or the exact model of the bot we had to mess around with. Our idea was to try and control the robots without writing complex programs in ROBOTC, to "hack" the robot in *some* sense of the word.

I was a freshman at the time, still coming into my programming knowledge. The two club seniors, Zachary Perlmutter and Eric Heinke, took over figuring out serial communication with the bot. Many of the details of this were lost on me at the time, and while I certainly understand much more of the code they wrote now, the exact methods they used to reverse engineer are lost to me. The most important parts I do remember: they used an obscure Java serial communication library and built a little "driver" to handle communicating info to the bot.

In terms of hardware, all you had to do was connect your computer to the Vex controller, and it would see you as a "partner controller" sending information to it. We left the bot with one of the preset code routines on it, and we suddenly had a way to turn anything our computers could interact with into a Vex controller. This solution was absolutely hacky and presented itself with more flair than it maybe deserved. We were not controlling the hardware components; we were simply pretending to be a second controller. Nonetheless, it was fun to execute and mess with.

Building on the work done by Eric and Zach, I designed two control routines that would use the driver to control the robot. These borrowed heavily from my time working in the F.I.R.S.T. Robotics Ecosystem. I created a system for writing autonomous routines that the robot would execute and a system to allow "TeleOp" (active control) of the robot.

For the autonomous framework, I implemented a basic [Command](https://github.com/ScottWegley/VexAutonomousControl/blob/main/src/Util/Command.java) and [Scheduler](https://github.com/ScottWegley/VexAutonomousControl/blob/main/src/Util/Scheduler.java) system. These allowed for the sequential execution of commands, making it easier to define autonomous routines. Additionally, I developed a [utility](https://github.com/ScottWegley/VexAutonomousControl/blob/main/src/Util/PacketBuilder.java) to simplify the process of building packets for communication with the robot.

For the TeleOp framework, I implemented a [thread](https://github.com/ScottWegley/VexLiveOperation/blob/main/src/Util/SinglePacketControl.java) that continuously retrieved updated values from an [interface](https://github.com/ScottWegley/VexLiveOperation/blob/main/src/Util/PowerSupplier.java) and supplied those values to the bot via the Vex driver. This allowed for real-time control of the robot using inputs from various sources.

Despite the lack of technical challenge, I treasure this project as it allowed me to use different sources of knowledge in a unique way and learn from two developers much more talented than myself. It also gave me a deeper appreciation for the intersection of hardware and software.