## Demo apps and projects
This repository containes demo applications and projects I worked on while getting to know data science and cloud computing concepts. 

+ [Prediction of Students Performance on Final Exam](https://github.com/molly-moon/projects/tree/master/students-performance)
  
  Machine learning pipeline that performs column transformation, feature selection and model training with the objective to classify students as either likely to fail on final exam or not. Several models were considered to compare the performance on the test set. The project features data transformation (multiple table joins), exploratory data analysis, explanatory analysis of XGBoost model predictions and error (false negatives) analysis. 

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/images/student-performance.png" height=250/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Targeted Marketing Campaign](https://github.com/molly-moon/projects/tree/master/targeted_marketing_campaign)
  
  Clustering K-means model used for customer profile discovery for strategic approach during the marketing campaign. Features PCA analysis to visualize detected clusters and find out the most representable features in the dataset. 

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/images/marketing-campaign-clustering.png" height=250/>
  </p>

  ML predictive model that classifies customers as wheather likely to respond to upcoming marketing campaign or not. The model used is an XGBoost classifier tuned by a random search of hyperparameters. Features exploratory data analysis and explanatory analysis of classification model predictions.

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/images/marketing-campaign-cfs.png" height=250/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Pneumonia Detection from Chest X-Ray Images](https://github.com/molly-moon/pneumonia-detection)

  The fine-tuned Convolutional Neural Network (CNN) that detects pneumonia on x-ray images. The project contains a visualization of representations learned by the network using activation maps technique. Also, it features a visual explanation of the classifier results with Grad-CAM (Gradient-weighted Class Activation Mapping). Refer to the [Overview](https://github.com/molly-moon/pneumonia-detection#overview-of-data-training-model-results) section for model performance summary.

  <p align=center>
  <img src="https://github.com/molly-moon/pneumonia-detection/raw/master/grad-cam.png" height=300/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Full-Stack Object Detection Application Hosted in the Cloud](https://github.com/molly-moon/app-object-detection)

  Serverless application that uses a deep learning model YOLOv2 to detect objects on uploaded images.

  The app is a single page website that accepts an input image for back-end serverless processing with AWS Lambda. It responds with the provided input image that has been marked with bouding boxes which represent detected objects. Each bounding box features a label that classifies the detected object.
  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/images/mazio_hambugs.png" height=300/>
  <img src="https://github.com/molly-moon/app-object-detection/raw/master/images/architecture.png" height=300/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Recognition of Hand Gestures Captured on Images]()
	
  The project allows to identify a number shown with hand gesture captured on images. It uses a ResNet deep learning model and leverages pre-trained weights. The model accepts an input image and returns a probability vector with 6 elements, corresponding to numbers 0-5. 

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/image-classification-resnet/images/hand-gesture.png" height=200/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Face Verification and Recognition on Images]()

  This project implements Inception algorithm for face verification and face recognition. 

  Face verification part accepts user input that to claim their identity and asseses whether the claimed identity is    true or not. Model compared the input image with the ground truth records stored in a database. Test 1 was conveyed so that user input represented a true claimed identity, while during Test 2 a false claimed identity was introduced.

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/face-verification-recognition/images/face-verification.png" width=300>
  </p>

  Face recognition part accepts a user's face image and returns its best prediction for their identity, based on a ground truth records stored in a database.

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/face-verification-recognition/images/face-recognition.png" width=180>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Speech Recognition on Synthesized Audio Files]()

  The model detects trigger word "activate" in input audio files. It triggers a chiming sound when the probability ultrapasses a certain threshold. The model is a uni-directional Recurrent Neural Network with Gated Recurrent Unit (GRU). It was trained on synthesized audio files from noise, trigger word and non-trigger word sounds. 

  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/images/trigger-word-detection.png" height=300/>
  </p>

<p align=center>
<br>
* * *
<br>
</p>

+ [Serverless Note Taking Application]()

  Project inspired by the open-source project [Serverless Stack](https://serverless-stack.com/) by Anomaly Innovations. They created a step-by-step guide to help you build a full-stack serverless application hosted on AWS.
  <p align=center>
  <img src="https://github.com/molly-moon/projects/raw/master/app-notes/images/notes1.png" width="400"/>
  <br> 
  <img src="https://github.com/molly-moon/projects/raw/master/app-notes/images/notes2.png" width="400"/>
  <br> 
  <img src="https://github.com/molly-moon/projects/raw/master/app-notes/images/notes3.png" width="400"/>
  </p>