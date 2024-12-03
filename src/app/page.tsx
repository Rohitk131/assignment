import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sidebar } from "@/components/sidebar";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Trophy, Target, CheckCircle } from 'lucide-react';

export default function SkillAssessmentDashboard() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Skill Test Results
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-6">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className=" rounded-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"
                            width={50}
                            height={50}
                            alt="HTML5 Logo"
                            className=""
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            HTML Mastery
                          </h2>
                          <p className="text-sm text-gray-500">
                            8 Questions • 15 minutes • June 5, 2021
                          </p>
                        </div>
                      </div>
                      <Button className=" text-md bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Update
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Trophy className="h-8 w-8 text-yellow-500" />
                        <Badge variant="secondary" className="text-yellow-500 bg-yellow-100">Top 1%</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">1</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Your Rank
                      </CardTitle>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="h-8 w-8 text-blue-500" />
                        <Badge variant="secondary" className="text-blue-500 bg-blue-100">Above Average</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">30%</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Percentile
                      </CardTitle>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                        <Badge variant="secondary" className="text-green-500 bg-green-100">Good Start</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">10 / 15</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Correct Answers
                      </CardTitle>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Performance Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Your score is in the 30th percentile, which is below the average of 72% for all test takers.
                    </p>
                    {/* Placeholder for the graph */}
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Performance Graph</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Syllabus Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { name: "HTML Tools, Forms, History", value: 80, color: "bg-blue-500" },
                        { name: "Tags & References in HTML", value: 60, color: "bg-green-500" },
                        { name: "Tables & References in HTML", value: 24, color: "bg-yellow-500" },
                        { name: "Tables & CSS Basics", value: 96, color: "bg-purple-500" },
                      ].map((item) => (
                        <div key={item.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              {item.name}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {item.value}%
                            </span>
                          </div>
                          <Progress value={item.value} className={`h-2 ${item.color}`} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Question Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-gray-900 mb-2">10/15</div>
                    <p className="text-gray-600">
                      You've correctly answered 10 out of 15 questions. There's room for improvement, but you're on the right track!
                    </p>
                    <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                      Review Answers <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

