//
//  ViewController.swift
//  Shellfish
//
//  Created by Tobin Juday on 8/24/15.
//  Copyright © 2015 Tobin Juday. All rights reserved.
//

import UIKit
import SafariServices

class ViewController: UIViewController {

	override func viewDidLoad() {
		super.viewDidLoad()
		
		SFContentBlockerManager.reloadContentBlockerWithIdentifier("com.open-bits.Shellfish.Shellfish-Content-Blocker", completionHandler: nil)
		
	}

	override func didReceiveMemoryWarning() {
		super.didReceiveMemoryWarning()
		// Dispose of any resources that can be recreated.
	}


}

