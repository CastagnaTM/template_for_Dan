This project is a template site I am building out for a friend, using create-react-app.
I am using this site as both a space for me to practice, test out new ideas, as well as build a rough draft of a site that my friend will be able to use for his business in the future.


To add or change images for any page, images must be stored in the Assets folder, and then imported into the appropriate component.


To update images in the Designs component, an object must be created and added to the array of images stored in the setImages function, and the image must be added in the same fashion as the template images, with the following key:value pairs: id (must be unique, and in sequential order), name, caption, and description. If done correctly, the Images component will render them appropriately, and should not need adjusting.


To add or change downloadable files, they must be stored in Assets/Documents, and imported the same way in the PackageContainer.


To update the packages, like with the images, they must be stored in the PackageContainer component, in the const [packages,setPackages] = useState array
