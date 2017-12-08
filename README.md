# DashThings.io

DashThing.io is WebApp dedicated to DIYers in need of an easy way to build
**Dashboard** for their **Things**.

## Context

We are using the concept of "Things" described in the "Building the Web of
Things" book written by Dominique D. Guinard and Vlad M. Trifa:

_A Thing with an uppercase "T" refers to a smart thing. A physical object that's
digitally augmented with one or more of the following:_

* _Sensors (temperature, light, motion, and so on)_
* _Actuators (displays, sound, motors and so on)_
* _Computation (can run programs and logic)_
* _Communication interfaces (wired or wireless)_

We also assume that all connected Things follow the authors recommendations and
W3C definition of a Web Thing: http://model.webofthings.io/.

## Features

* Connect a Thing and let our App discover all sensors and actuators.
* Display Data on the Dashboard. (Static, Polling or Real Time)
* Create Labs and Share your Things with the world.
* To be completed...

## Tech Stack

The app has been built using the MERN stack and we used D3 library for data
visualisation. We were all keen to explore MERN stack. Also NodeJS, ReactJS,
Express and MongoDB are popular and well Documented and D3 is powerful data Viz library.


For unit tests we are using Jest. We chose Jest because it is included within
the Create-react-app provided by Facebook. For CI we are using Travis CI. It is
used by the Chingu Organisation and is free for opensource.
