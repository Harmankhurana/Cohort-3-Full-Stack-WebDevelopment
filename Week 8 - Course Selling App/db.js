import mongoose from "mongoose";
const Schema = mongoose.Schema();
const objectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    id: objectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    id: objectId,
    title: String,
    description: String,
    price: number,
    imageUrl: String,
    creatorId: objectId,
});

const adminSchema = new Schema({
    id: objectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
});

const purchaseSchema = new Schema({
    id: objectId,
    courseId: objectId,
    userId: objectId,
});


const UserModel = mongoose.model('user', userSchema);
const CourseModel = mongoose.model('course', courseSchema);
const AdminModel = mongoose.model('admin', adminSchema);
const PurchasesModel = mongoose.model('purchase', purchaseSchema);

export {
    UserModel,
    CourseModel,
    AdminModel,
    PurchasesModel,
};
