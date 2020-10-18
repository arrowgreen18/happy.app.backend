import Images  from '../models/images';

export default {
    render(image: Images) {
    	return {
             id: image.id,
             url: `https://codersteam.herokuapp.com/uploads/${image}`
    	}
    },

    renderMany(images: Images[]) {
    	return images.map(image => this.render(image.path));
    }
};