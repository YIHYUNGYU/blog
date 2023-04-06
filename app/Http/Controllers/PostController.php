<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        $posts = Post::all();
        return Inertia::render('Post', compact('posts'));
    }

    public function show(Post $post): Response
    {
        return Inertia::render('Post/PostShow', compact('post'));
    }

    public function create(): Response
    {
        return Inertia::render('Post/PostCreate');
    }

    public function store(Request $request): Response
    {
        $post = Post::create($request->all());
        return Inertia::render('Post/PostShow', compact('post'));
    }

    public function edit(Post $post): Response
    {
        return Inertia::render('Post/PostEdit', compact('post'));
    }

    public function update(Request $request, Post $post): Response
    {
        $post->update($request->all());
        return Inertia::render('Post/PostShow', compact('post'));
    }

    public function destroy(Post $post): Response
    {
        $post->delete();
        return Inertia::render('Post/PostIndex');
    }
}
