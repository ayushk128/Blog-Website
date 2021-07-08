import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';

const storage = new GridFsStorage({
    url: 'mongodb://user:ayush%40123@blogweb-shard-00-00.rj4tw.mongodb.net:27017,blogweb-shard-00-01.rj4tw.mongodb.net:27017,blogweb-shard-00-02.rj4tw.mongodb.net:27017/BLOGWEBSITE?ssl=true&replicaSet=atlas-s5uc0h-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}.blog.${file.originalname}`;

        return {
            bucketName: "photos",
            fileName: `${Date.now()}-blog-${file.originalname}`
        }
    }

})

export default multer({ storage })