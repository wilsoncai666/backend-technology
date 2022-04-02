package org.etoak.modules.task;

import org.etoak.modules.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Job {
	
	@Autowired
	private UserService userService;
	
	//@Scheduled(cron="0/5 * * * * ?")
	public void job(){
		
		System.out.println("job-anno");
		
	}

}
