// Type definitions for stoppable 1.0
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Server } from 'http';

export type StoppableServer = Server & { stop: StoppableFn };
export type StoppableFn = (callback: () => void) => void;

declare function stoppable(server: Server, grace?: number): StoppableServer;

export = stoppable;
