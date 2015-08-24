//
//  ActionRequestHandler.swift
//  Shellfish Content Blocker
//
//  Created by Tobin Juday on 8/24/15.
//  Copyright © 2015 Tobin Juday. All rights reserved.
//

import UIKit
import MobileCoreServices

class ActionRequestHandler: NSObject, NSExtensionRequestHandling {

    func beginRequestWithExtensionContext(context: NSExtensionContext) {
		let attachment = NSItemProvider(contentsOfURL: NSBundle.mainBundle().URLForResource("blockerList", withExtension: "json"))!
//        let attachment = NSItemProvider(contentsOfURL: NSBundle.mainBundle().URLForResource("blocked-content-mobile", withExtension: "json"))!
		
        let item = NSExtensionItem()
        item.attachments = [attachment]
    
        context.completeRequestReturningItems([item], completionHandler: nil);
    }
    
}
