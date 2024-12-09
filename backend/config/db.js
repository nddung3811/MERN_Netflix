import mongoose from "mongoose";


export const connectDB = async () => {
	try {
		// URI kết nối
		const uri = "mongodb+srv://dgx3811:Cr2A5r4SCxW4jb@cluster0.z63gr.mongodb.net/PROJECT1_db?retryWrites=true&w=majority&appName=Cluster0";

		// Kết nối tới MongoDB
		const conn = await mongoose.connect(uri);

		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
