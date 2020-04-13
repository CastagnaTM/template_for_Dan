This project is a template site I am building out for a friend, using create-react-app.
I am using this site as both a space for me to practice, test out new ideas, as well as build a rough draft of a site that my friend will be able to use for his business in the future.


To add or change images for any page, images must be stored in the Assets folder, and then imported into the appropriate component.


To update images in the Designs component, an object must be created and added to the array of images stored in the setImages function, and the image must be added in the same fashion as the template images, with the following key value pairs: id (must be unique, and in sequential order), name, caption, description, and "import" which must be the same as the name given to the image when imported at the top of the file. The import property is necessary for the getSelectedImage function to work, which allows users to click on any image to see a larger version of it. If done correctly, the Images component will render them appropriately, and should not need adjusting.




** this section can be updated to include multiple categories, such as signs or props. The displayImages function contains a switch statement that respoonds to the value you pass into it. It uses that value to then map a slice of the designsImages array from state to the Image component.

To make the images uniform height, a max height can be added to the CSS class 'design-component-body'.


To add or change downloadable files, they must be stored in Assets/Documents, and imported the same way in the PackageContainer.


To update the packages, like with the images, they must be stored in the PackageContainer component, in the const [packages,setPackages] = useState array
