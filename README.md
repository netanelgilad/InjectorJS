InjectorJS
==========

InjectorJS (temporary name) is a new way to develop js-based applications. The idea behind InjectorJS is a dependency injection framework where the container is shared by everyone, making every application developed and every component a collaborative effort.

The idea is in very early stages. If this page has intrguied you in any way, contact me at netanelgilad@gmail.com and share your thoughts.

Getting Started
===============

InjectorJS is a [meteor](https://www.meteor.com/) application. To get started just clone the repo and run `meteor`.

Ideas
=====

The main ideas for InjectorJS are described here. They are totally open to discussion as I continue to think up how this should work.

## Components

The basic unit of everything is a component. This is just a piece of code that has a closed set of funcitonality. Every piece of code part of an application should be a component, which makes an application just a big puzzle of components (really? can everything be defined into a component easily? not sure...).

The components written in InjectorJS are shared by everyone. From universally useful components (like Math and such) to components specific to a certain domain (I don't say specific to a certian application because this idea should not exist), all components are shared and available to use by everyine.

### Naming and Versioning

Naming and versioning is important when all components are shared by everyone. The idea right now is to use something similar to Github, having comonents namespaced by the creating user, allowing forks and versioning with tags and more.

## Applications

After writing a lot of components and enjoying how they work, we create an application. As described, an application is just an assortment of components, but what it really is, is a component in itself, that does thing itself not only supply services to other components (Basicly they act like a main function).

InjectorJS can serve applications in itself, basicly the same way is servers components but just wrapping it up for the browser (or other platforms in the futere?).

## Online Editor

Since all code is shared by everyone, why not share the editor itself? InjectorJS will provide an online editor to write up components and applications. That editor will also let you browse the existing components and easily find the right pieces of code you need.

Using an offline editor (any IDE) will be more difficult. InjectorJS is not based of files and every component needs to be saved to the online database. 

Implementation
==============

This part describes implementation subjects that are needed to make the ideas described above come to life.

....
