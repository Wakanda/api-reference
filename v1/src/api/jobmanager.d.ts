///<reference path="./job.d.ts" />

	interface JobManager {
		/**
		*returns a new job object or the job object corresponding to the jobID string parameter
		*/
		getJob(jobID?: String) : Job;
		/**
		*returns an array containing all the jobs currently running on the Wakanda Server
		*/
		getJobs() : Array<Job>;
	}